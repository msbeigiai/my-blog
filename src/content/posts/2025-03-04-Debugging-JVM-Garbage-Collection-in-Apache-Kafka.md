---
title: "Debugging JVM Garbage Collection in Apache Kafka"
date: "2025-03-04"
excerpt: "Debugging JVM Garbage Collection in Apache Kafka"
coverImage: "/images/kafka-memory-usage.svg"
tags:
  - Kafka
  - Java
  - JVM
  - Garbage Collector
---

# Managing Memory in Apache Kafka and Debugging JVM Garbage Collection

## Table of Contents
1. [Why Does Kafka Store Data in Memory?](#why-does-kafka-store-data-in-memory)
2. [Checking Kafka Memory Consumption](#checking-kafka-memory-consumption)
3. [Inspecting Kafka Retention Policies](#inspecting-kafka-retention-policies)
4. [OS Page Cache Impact on Memory Usage](#os-page-cache-impact-on-memory-usage)
5. [Debugging JVM Garbage Collection (GC) in Kafka](#debugging-jvm-garbage-collection-gc-in-kafka)
6. [Conclusion](#conclusion)

## Why Does Kafka Store Data in Memory?
Apache Kafka is designed to keep incoming data in RAM as much as possible before writing it to disk, improving **performance and reducing latency**. However, excessive memory consumption over time may result from:

- **High message volume and slow data retention cleanup**  
- **Slow consumers causing messages to remain in memory**  
- **Excessive Page Cache usage by the OS**  
- **JVM Memory Leaks due to inefficient Garbage Collection (GC)**  

## Checking Kafka Memory Consumption
### Check Overall Memory Usage
```bash
free -m
```
This command helps identify how much memory is used by **programs (used)** and how much is allocated to **Page Cache and Buffer**.

### Check Kafka-Specific Memory Usage
```bash
ps aux --sort=-%mem | grep kafka
```
This shows how much RAM Kafka is consuming.

Alternatively, use `htop` for a real-time view:
```bash
htop
```

## Inspecting Kafka Retention Policies
Kafka retains messages based on a predefined retention policy. If not configured properly, excessive data may accumulate in memory.

To check retention settings:
```bash
kafka-configs.sh --bootstrap-server localhost:9092 --entity-type topics --describe
```
Key properties:
- `log.retention.hours`  Defines how long messages are stored.
- `log.retention.bytes`  Defines how much data can be retained before deletion.

**If these values are too high, memory consumption will keep increasing.**

## OS Page Cache Impact on Memory Usage
Sometimes, increased memory usage is due to **OS-level caching of Kafka log files** rather than Kafka itself. Check the **buff/cache** value in `free -m`. If it is high, you can manually clear the cache:
```bash
sync; echo 3 > /proc/sys/vm/drop_caches
```
**Warning:** This only clears OS cache and does not affect Kafka data.

## Debugging JVM Garbage Collection (GC) in Kafka
Since Kafka runs on the JVM, improper garbage collection (GC) can lead to memory issues. **Inefficient GC cycles may prevent memory from being freed properly**, causing RAM consumption to grow over time.

### Checking JVM Memory Usage
To check Kafka’s JVM memory consumption, use:
```bash
jstat -gc $(pgrep -f kafka) 1000
```
This command provides real-time statistics on JVM memory allocation and garbage collection.

### Forcing Garbage Collection
You can manually trigger GC to see if memory is being freed properly:
```bash
jcmd $(pgrep -f kafka) GC.run
```
If memory usage significantly drops after running this command, it means **Kafka’s heap memory was holding unnecessary data**.

### Enabling GC Logging for Debugging
To track GC performance and analyze memory issues, enable GC logging in Kafka’s JVM options:
```bash
export KAFKA_HEAP_OPTS="-Xmx4G -Xms4G -XX:+UseG1GC -XX:+PrintGCDetails -Xloggc:/var/log/kafka-gc.log"
```
Then, monitor the logs:
```bash
tail -f /var/log/kafka-gc.log
```
If frequent **Full GC cycles** appear, consider tuning **Heap Size (`-Xmx`, `-Xms`)** and switching to **G1GC or ZGC**.

**For JDK 9+, use `jhsdb jmap` instead of `jmap -heap`:**
```bash
jhsdb jmap --heap --pid $(pgrep -f kafka)
```
shows output like:

```bash
Attaching to process ID 1, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 11.0.18+10-LTS

using thread-local object allocation.
Garbage-First (G1) GC with 13 thread(s)

Heap Configuration:
   MinHeapFreeRatio         = 40
   MaxHeapFreeRatio         = 70
   MaxHeapSize              = 1073741824 (1024.0MB)
   NewSize                  = 1363144 (1.2999954223632812MB)
   MaxNewSize               = 643825664 (614.0MB)
   OldSize                  = 5452592 (5.1999969482421875MB)
   NewRatio                 = 2
   SurvivorRatio            = 8
   MetaspaceSize            = 21807104 (20.796875MB)
   CompressedClassSpaceSize = 1073741824 (1024.0MB)
   MaxMetaspaceSize         = 17592186044415 MB
   G1HeapRegionSize         = 1048576 (1.0MB)

Heap Usage:
G1 Heap:
   regions  = 1024
   capacity = 1073741824 (1024.0MB)
   used     = 164656432 (157.0286102294922MB)
   free     = 909085392 (866.9713897705078MB)
   15.334825217723846% used
G1 Young Generation:
Eden Space:
   regions  = 4
   capacity = 83886080 (80.0MB)
   used     = 4194304 (4.0MB)
   free     = 79691776 (76.0MB)
   5.0% used
Survivor Space:
   regions  = 3
   capacity = 3145728 (3.0MB)
   used     = 3145728 (3.0MB)
   free     = 0 (0.0MB)
   100.0% used
G1 Old Generation:
   regions  = 151
   capacity = 986710016 (941.0MB)
   used     = 157316400 (150.0286102294922MB)
   free     = 829393616 (790.9713897705078MB)
   15.943529248617661% used
```

Or, use:
```bash
jcmd $(pgrep -f kafka) GC.heap_info
```

## Conclusion
If **Kafka memory consumption keeps increasing** and reaches swap, you should investigate the root cause:

**If `buff/cache` is high, it’s an OS issue, not Kafka.**  
**If Kafka is consuming excessive memory, check retention policies and heap size.**  
**If swap is also full, JVM memory leaks may be the issue—inspect GC behavior.**  

By leveraging these debugging techniques, you can **analyze, optimize, and manage Kafka memory usage effectively**. 
