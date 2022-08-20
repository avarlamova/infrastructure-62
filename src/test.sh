#!/bin/bash
LOG="git log $TAG_NAME --pretty"
export COMMITS=$(eval $LOG)
echo "COMMITS<<EOF" >> $GITHUB_ENV
echo "$COMMITS" >> $GITHUB_ENV
echo "EOF" >> $GITHUB_ENV
#echo "COMMITS=$(eval $LOG)" >> $GITHUB_ENV
#  echo $COMMITS
