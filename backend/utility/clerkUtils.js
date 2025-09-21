// utility/clerkUtils.js
const { Clerk } = require("@clerk/clerk-sdk-node");

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

async function getUserByEmail(email) {
  try {
    const users = await clerk.users.getUserList({ emailAddress: [email] });

    if (users.length === 0) return null;

    const user = users[0];
    return {
      userId: user.id,
      userName: user.username || user.firstName || user.emailAddresses[0].emailAddress,
    };
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
}

module.exports = { getUserByEmail };