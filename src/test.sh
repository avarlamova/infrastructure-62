#!/bin/bash
LOG="git log --pretty=format:'%H %an %s'\n"
LAST_TAG=$(git describe --abbrev=0 --match 'rc-0.*' --exclude $TAG_NAME)
echo $LAST_TAG
if [ $LAST_TAG != '' ]
 then
  LOG="$LOG $LAST_TAG..HEAD"
  fi
echo $LOG
export COMMITS=$(eval $LOG)
echo "COMMITS<<EOF" >> $GITHUB_ENV
echo "$COMMITS" >> $GITHUB_ENV
echo "EOF" >> $GITHUB_ENV
#echo "COMMITS=$(eval $LOG)" >> $GITHUB_ENV
#  echo $COMMITS

