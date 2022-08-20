#!/bin/bash
LOG="git log rc.0.0.5"
export COMMITS=$(eval $LOG)

echo "COMMITS=$(eval $LOG)" >> $GITHUB_ENV
#  echo $COMMITS
