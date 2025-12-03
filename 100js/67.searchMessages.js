function searchMessages(messages, searchTerm) {
  return messages
    .map((m) => {
      let count = 0;

      for (const t of searchTerm.split(' ')) {
        if (m.body.toLowerCase().includes(t.toLowerCase())) count += t.length;
      }

      return { ...m, count };
    })
    .sort((a, b) => b.count - a.count || b.sentAt - a.sentAt)
    .filter((m) => m.count > 0)
    .map((m) => ({ body: m.body, sentAt: m.sentAt }));
}

export { searchMessages };
