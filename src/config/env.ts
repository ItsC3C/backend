import "dotenv/config";

const { EMAIL_RECEIVE, EMAIL_USER, EMAIL_PASS, PORT } = process.env;

if (!EMAIL_RECEIVE || !EMAIL_USER || !EMAIL_PASS) {
  throw new Error("EMAIL_RECEIVE, EMAIL_USER, and EMAIL_PASS are required");
}

export { EMAIL_RECEIVE, EMAIL_USER, EMAIL_PASS, PORT };
