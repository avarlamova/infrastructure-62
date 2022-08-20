#!/bin/bash
LOG="git log --pretty=format:'%H %an %s'"
LAST TAG
export COMMITS=$(eval $LOG)
echo "COMMITS<<EOF" >> $GITHUB_ENV
echo "$COMMITS" >> $GITHUB_ENV
echo "EOF" >> $GITHUB_ENV
#echo "COMMITS=$(eval $LOG)" >> $GITHUB_ENV
#  echo $COMMITS


