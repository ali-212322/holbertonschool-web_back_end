#!/usr/bin/env python3
"""Change school topics based on the name"""


def update_topics(mongo_collection, name, topics):
    """Update all topics of school documents matching name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
