#!/bin/sh

API="https://morning-hollows-81329.herokuapp.com"
URL_PATH="/items"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
