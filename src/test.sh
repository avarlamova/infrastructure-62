#!/bin/bash
LOG="$(git log rc.0.0.26)"
export COMMITS=$(eval $LOG)
