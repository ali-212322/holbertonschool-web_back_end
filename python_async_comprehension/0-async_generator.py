#!/usr/bin/env python3
"""
Module for async generator.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronous generator that yields 10 random numbers.

    Loops 10 times, each time asynchronously waits 1 second,
    then yields a random number between 0 and 10.

    Yields:
        Random float between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
