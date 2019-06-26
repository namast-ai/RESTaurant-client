#!/bin/bash

API="https://morning-hollows-81329.herokuapp.com"
URL_PATH="/items"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "item": {
      "name": "'"${NAME}"'",
      "quantity": "'"${QUANTITY}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
