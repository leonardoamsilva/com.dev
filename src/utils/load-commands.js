export const loadCommands = async (dataCommands) => {
  const commandsResponse = await fetch(dataCommands);

  const commands = await Promise(commandsResponse);
  const commandsJson = await commands.json();
  console.log(commandsJson)

  return commandsJson;
};
