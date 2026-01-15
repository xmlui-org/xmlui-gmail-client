function getMockAuthData() {
  return window.config.useMockData && window.mockGmailData
    ? {
        user: window.mockGmailData.mockUser,
        tokens: window.mockGmailData.mockTokens,
        login: () => {},
        logout: () => {},          
      }
    : null;
}

function transformMessages(data) {
  const newNextToken = data.nextPageToken || "";
  const shouldUpdateNextToken = pagination.value.nextPageToken !== newNextToken;

  if (shouldUpdateNextToken) {
    pagination.update({
      nextPageToken: newNextToken,
    });
  }

  return data.messages || [];
}

function getMessagesUrl() {
  if (window.config.useMockData) return "/mockMessages.json";

  return (
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=" +
    pagination.value.pageSize +
    (pagination.value.currentPageToken
      ? "&pageToken=" + pagination.value.currentPageToken
      : "")
  );
}

function getMessagesHeaders() {
  if (window.config.useMockData) return {};
  return { Authorization: "Bearer " + auth.tokens.access_token };
}

function handleMessageReceived(msg, iframeHeight) {
  if (msg && msg.type === "iframe-height") {
    const newHeight = Number(msg.height) + 20;
    iframeHeight.update({ height: newHeight });
  }
}
