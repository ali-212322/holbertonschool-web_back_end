#!/usr/bin/env python3
"""
Module for duck typing an iterable object.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return list of tuples with elements and their lengths.

    Args:
        lst: An iterable of sequences

    Returns:
        List of tuples containing each element and its length
    """
    return [(i, len(i)) for i in lst]
