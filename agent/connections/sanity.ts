import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Sanity MCP server for content",
  auth: {
    getToken: async () => ({ token: process.env.SANITY_API_TOKEN || "" }),
  },
});
