#!/usr/bin/env python3
"""Returns the list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """Return list of schools matching the topic"""
    return mongo_collection.find({"topics": topic})
