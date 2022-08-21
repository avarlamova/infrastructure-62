#!/bin/bash
TAGS_COUNT=$( git tag | wc -l)
LOG="git log --pretty=format:'%H %an %s'"

if [ $TAGS_COUNT -gt 1 ]
then
#LAST_TAG=$(git describe --abbrev=0 --match 'rc-0.*' --exclude $TAG_NAME)
LAST_TAG=$(git describe --abbrev=0 --tags "$(git describe --abbrev=0 --tags)^")
  if [ $LAST_TAG != '' ]
   then
    LOG="$LOG $LAST_TAG...$TAG_NAME"
    fi
else
    LOG="$LOG $TAG_NAME"
fi

export COMMITS=$(eval $LOG)
echo "COMMITS<<EOF" >> $GITHUB_ENV
echo "$COMMITS" >> $GITHUB_ENV
echo "EOF" >> $GITHUB_ENV


