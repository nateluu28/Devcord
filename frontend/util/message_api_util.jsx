export const fetchMessages = (type, id) => (
  $.ajax({
    url:
      type === "Conversation" ? 
        `api/conversation/${id}/messages` :
        `api/channels/${id}/messages`,
    method: 'GET'
  })
);

export const deleteMessage = (messageId) => (
  $.ajax({
    url: `api/messages/${messageId}`,
    method: 'DELETE'
  })
)

export const createMessage = (type, id, message) => (
  $.ajax({
    url:
      type === "Conversation" ?
        `api/conversation/${id}/messages` :
        `api/channels/${id}/messages`,
    method: 'POST',
    data: { message }
  })
)
