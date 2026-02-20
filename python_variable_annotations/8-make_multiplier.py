#!/usr/bin/env python3
"""
Module for creating a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a float by multiplier.

    Args:
        multiplier: The multiplier value

    Returns:
        A function that multiplies a float by multiplier
    """
    def multiply(n: float) -> float:
        """Multiply n by multiplier."""
        return n * multiplier
    return multiply
