import time
import os
import psutil

def cpu_intensive_task(iterations):
    for _ in range(iterations):
        _ = [x**2 for x in range(10000)]

def write_to_disk(iterations, file_path):
    with open(file_path, 'w') as f:
        for i in range(iterations):
            f.write(f"This is line {i}\n")

def allocate_memory(size_in_mb):
    allocated_memory = bytearray(size_in_mb * 1024 * 1024)
    for i in range(size_in_mb * 1024 * 1024):
        allocated_memory[i] = i % 256  # Just some operation to ensure memory is used
    return allocated_memory

def benchmark(duration):
    start_time = time.time()
    end_time = start_time + duration
    cpu_iterations = 0
    disk_iterations = 0
    memory_size_mb = 500  # Amount of memory to allocate in MB
    
    allocated_memory = allocate_memory(memory_size_mb)

    file_path = "benchmark_output.txt"

    while time.time() < end_time:
        cpu_intensive_task(1)
        cpu_iterations += 1
        write_to_disk(1, file_path)
        disk_iterations += 1

    os.remove(file_path)

    print(f"Completed {cpu_iterations} CPU iterations and {disk_iterations} disk write iterations in {duration / 60} minutes")
    print(f"Allocated {memory_size_mb} MB of memory")

if __name__ == "__main__":
    duration_in_minutes = 5  # You can change this to 10 for a 10-minute run
    duration_in_seconds = duration_in_minutes * 60
    benchmark(duration_in_seconds)
