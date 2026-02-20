#!/usr/bin/env python3
"""
Module for creating a tuple from string and int/float.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with string and square of int/float.

    Args:
        k: String key
        v: Integer or float value

    Returns:
        Tuple with string and square of v as float
    """
    return (k, v ** 2)
