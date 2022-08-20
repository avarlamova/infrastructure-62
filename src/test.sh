#!/bin/bash
LOG="git log rc.0.0.5"
export COMMITS=$(eval $LOG)
echo "COMMITS<<EOF" >> $GITHUB_ENV
echo "$ (eval $LOG )" >> $GITHUB_ENV
echo "EOF" >> $GITHUB_ENV
#echo "COMMITS=$(eval $LOG)" >> $GITHUB_ENV
#  echo $COMMITS
