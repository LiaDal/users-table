const response = await fetch("https://api.userfront.com/v0/users/{userId}", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer uf_test_admin_xbp94dmn_3e0b15746e808f803985418582e23cf6"
  }
});

console.log(response.json());