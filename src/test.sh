#!/bin/bash -e {0}
LOG="git log rc.0.0.5"
export COMMITS=$(eval $LOG)
#  echo $COMMITS
