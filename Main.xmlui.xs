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
  const shouldUpdateNextToken = paginationState.value.nextPageToken !== newNextToken;

  if (shouldUpdateNextToken) {
    paginationState.update({
      nextPageToken: newNextToken,
    });
  }

  return data.messages || [];
}

function getMessagesUrl() {
  if (window.config.useMockData) return "/mockMessages.json";

  return (
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=" +
    paginationState.value.pageSize +
    (paginationState.value.currentPageToken
      ? "&pageToken=" + paginationState.value.currentPageToken
      : "")
  );
}

function getMessagesHeaders() {
  if (window.config.useMockData) return {};
  return { Authorization: "Bearer " + auth.tokens.access_token };
}

