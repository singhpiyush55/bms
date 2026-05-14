// Fetch the user from the db and display the username on the page

import {Client}  from "@repo/db/client";


export default async function Home() {
  // Fetch the any first user from the database
  const user = await Client.user.findFirst();

  return (
    <div>
      <h1>User Information</h1>
      <p>Username: {user?.username}</p>
    </div>
  );
}
