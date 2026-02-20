#!/usr/bin/env python3
"""
Module for summing a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum a list of floating point numbers.

    Args:
        input_list: List of floats to sum

    Returns:
        The sum of all floats in the list
    """
    return sum(input_list)
