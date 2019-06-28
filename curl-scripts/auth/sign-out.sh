# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://morning-hollows-81329.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Bearer ${TOKEN}" \
  --request DELETE \

echo
