#!/bin/bash

# Define the compile command
COMPILE_COMMAND="compile:all"

# Identify changed apps
CHANGED_APPS=$(git diff --name-only HEAD^ HEAD | grep 'apps/' | awk -F'/' '{print $2}' | uniq)
echo "Changed apps:"
echo "$CHANGED_APPS"

# Initialize an array for Lerna scopes
LERNA_SCOPES=()
for APP in $CHANGED_APPS; do
  if [ -d "apps/$APP" ]; then
    LERNA_SCOPES+=(--scope "@ldmnet/$APP")
  fi
done

# Check if there are any scopes to include in the command
if [ ${#LERNA_SCOPES[@]} -gt 0 ]; then
  echo "Building changed apps with scopes: ${LERNA_SCOPES[*]}"
  lerna run $COMPILE_COMMAND --parallel "${LERNA_SCOPES[@]}"
else
  echo "No apps have changed."
fi

