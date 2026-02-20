#!/usr/bin/env python3
"""
Module for measuring runtime of parallel async comprehensions.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times in parallel and measure runtime.

    Uses asyncio.gather to run async_comprehension 4 times in parallel
    and measures the total execution time.

    Returns:
        Total runtime in seconds
    """
    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.time()
    return end_time - start_time
