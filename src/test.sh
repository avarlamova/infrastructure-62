#!/bin/bash
LOG="git log"
export COMMITS=$(eval $LOG)
      echo $COMMITS
      echo "${env.TAG_NAME}"
