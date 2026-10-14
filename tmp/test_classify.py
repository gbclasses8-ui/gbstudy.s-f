import json
import re

with open('/tmp/all_batches.json') as f:
    raw_batches = json.load(f)

def get_category(title):
    t = title.lower()
    if 'class 12' in t or '12th' in t:
        if 'commerce' in t:
            return 'Class 12th', 'Commerce'
        return 'Class 12th', 'Science'
    elif 'class 11' in t or '11th' in t:
        if 'commerce' in t:
            return 'Class 11th', 'Commerce'
        if 'jee' in t:
            return 'Class 11th', 'JEE'
        return 'Class 11th', 'Science'
    elif 'class 10' in t or '10th' in t:
        return 'Class 10th', 'Foundation'
    elif 'class 9' in t or '9th' in t:
        return 'Class 9th', 'Foundation'
    elif 'nda' in t or 'tejas' in t or 'udaan' in t:
        return 'NDA & Defence', 'Defence'
    elif 'ca foundation' in t or 'buniyaad' in t:
        return 'Commerce & CA', 'CA'
    elif 'cuet' in t:
        return 'JEE & CUET', 'CUET'
    return 'Special', 'Special'

def get_year(title):
    if '2026-27' in title or '2026-2027' in title:
        return '2026-27'
    elif '2025-26' in title:
        return '2025-26'
    elif '2024-25' in title:
        return '2024-25'
    elif '2028' in title:
        return '2027-28'
    elif '2027' in title:
        return '2026-27'
    return '2026-27'

def get_tag(title):
    t = title.lower()
    if 'crash course' in t:
        return 'Crash Course'
    elif 'recorded' in t:
        return 'Recorded VOD'
    elif 'live' in t:
        return 'Live & Recorded'
    elif 'foundation' in t:
        return 'Foundation'
    return 'Comprehensive'

print("Preparing batch data generation script...")
