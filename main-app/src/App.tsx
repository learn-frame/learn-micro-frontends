import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, Flex, Text } from "@radix-ui/themes";

const App: FC = () => {
  const history = useNavigate();
  const onClick = (val: string) => {
    history(val);
  };

  return (
    <>
      <RadioGroup.Root defaultValue="1">
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item
                value="sub-app-1"
                onClick={() => onClick("sub-app-1")}
              />
              SubAPP 1
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item
                value="sub-app-2"
                onClick={() => onClick("sub-app-2")}
              />
              SubAPP 2
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
      <div id="micro-app-container"></div>
    </>
  );
};

export default App;
