export const fetchMessages = (type, id) => (
  $.ajax({
    url:
      type === "Conversation" ? 
        `api/conversation/${id}/messages` :
        `api/channels/${id}/messages`,
    method: 'GET'
  })
);

