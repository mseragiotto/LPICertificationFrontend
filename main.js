var tokenCalls = 0;

function LPJsMethodName(callback) {
    addAlert('container', '[2] ' + status + ' lpGetAuthenticationToken(callback)');

    //Standard
    callback('eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE4MjE0Mzc3NTMsImlhdCI6MTYxMzY2MTc1MywiaXNzIjoiaHR0cHM6Ly9scGJyYW5kLmNvbSIsImxwX3NkZXMiOlt7ImluZm8iOnsiY3VzdG9tZXJJZCI6IlRFU1RfQVVUSF9VU0VSIn0sInR5cGUiOiJjdG1yaW5mbyJ9LHsicGVyc29uYWwiOnsiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwibGFuZ3VhZ2UiOiJpdC1JVCIsImNvbnRhY3RzIjpbeyJwZXJzb25hbENvbnRhY3QiOnsiZW1haWwiOiJtc2VyYWdpb3R0b0BsaXZlcGVyc29uLmNvbSIsInBob25lIjoiKzM5MzMzNDY3NTg1OSIsInBob25lVHlwZSI6bnVsbCwiYWRkcmVzcyI6Ikl0YWx5IiwicHJlZmVycmVkQ29udGFjdE1ldGhvZCI6bnVsbH19XX0sInR5cGUiOiJwZXJzb25hbCJ9XSwic3ViIjoiTFAtQnJhbmRfdGVzdF9qd3QifQ.YdvRe934DxcNPXT70o3Pbo3V0xFM20HhMjhEWUTGj03Z0jYnozkPNrBUzi57IFcVqB2ACbFHl7qXae8xmVzmWdezgy3-nqT2FT9O8xzRT0AgJYsGBxoV84HuIG9evWELm04qSZ_4U9EBuiBgkujTTenCQDjcXXhc96ttYEbvqW6B88oIFH5mjAPzXF6t0_nqv3JG-eozKi9d4yI0GTZNZfd04OSLkLXkS5oTPlEwupEHB-m7FYAJ7vAPCrh60NGYKXnOUd-4T7Zg--YaCQqeryoSEDZwYFgWKrVxvcqvq2hvDOmqZPK0kVn-fk9l2qjBtIj-uGXtBRc-RcXIz--3GQ');
}

function addAlert(targetDiv, text) {
    var div = document.getElementById(targetDiv);
    var alertDiv = document.createElement("div");

    alertDiv.className = 'alert alert-primary';
    alertDiv.innerHTML += text;
    div.appendChild(alertDiv);
}