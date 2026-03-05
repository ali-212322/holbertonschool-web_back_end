#!/usr/bin/env python3
"""Simple helper function for pagination."""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple containing the start and end index
    corresponding to a pagination range.
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
