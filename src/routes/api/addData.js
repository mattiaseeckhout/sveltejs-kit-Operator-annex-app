// src/routes/api/addData.js
export async function post(request) {
  const newData = request.body; // Assuming the request body contains the data sent from the form
  const existingData = await fetch('$lib/data/ferro1.json').then((res) => res.json());
  const updatedData = [...existingData, newData];

  // Save the updated data back to the JSON file
  await fetch('$lib/data/ferro1.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  return {
    status: 200,
    body: { message: 'Data added successfully' },
  };
}
