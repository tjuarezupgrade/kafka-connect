const fs = require('fs');
const axios = require('axios');

const embeddedSchema = JSON.parse(fs.readFileSync('../avro-schemas/spectrum-value.json', 'utf8'));
const stringifiedSchema = JSON.stringify(embeddedSchema);

const avroSchema = { "schema": stringifiedSchema };

const headers = {
  'Content-Type': 'application/vnd.schemaregistry.v1+json',
};

console.log(avroSchema);

axios.post('http://localhost:8081/subjects/spectrum-message/versions', avroSchema, { headers: headers })
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  //console.log(res)
})
.catch((error) => {
  console.error(error)
});