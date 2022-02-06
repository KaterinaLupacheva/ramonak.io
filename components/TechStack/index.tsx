import { Label, TechStackContainer, Title } from './styles';

export default function TechStack() {
  return (
    <TechStackContainer>
      <Title>
        My main <Label>techstack</Label> inludes:
        <ul>
          <li>React.js</li>
          <li>React Native</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>
      </Title>
    </TechStackContainer>
  );
}
