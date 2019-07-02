## POST /v1/signin
ログインする.

### Parameters
* `token` string (required)

### Example

#### Request
```
POST /v1/signin HTTP/1.1
Accept: application/json
Content-Length: 76
Content-Type: application/json

{
  "token": "9eaebd5d902edced88a8521ab9fd4985e860707383155c593f37a4223232aac1"
}
```