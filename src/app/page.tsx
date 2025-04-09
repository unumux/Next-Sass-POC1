import Image from "next/image";
import styles from "./page.module.css";
import Stack from "./components/stack/stack";
import Button from "./components/button/button";
import Link from "next/link";
import Text from "./components/text/text";
import Example from "./components/example/example";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Example />

        <Stack gap="x11">
          <div>
            <Text myHtml="h1">This is the first group in a Stack component.</Text>
            <Text>This is the Text component (default)</Text>
            <Text>This is another Text component (default)</Text>
            <Button>primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="green">green</Button>
            <Button isDisabled={true}>primary (disabled)</Button>
            <Button asChild>
              <Link href="./">link</Link>
            </Button>
            <Button asChild isDisabled={true}>
              <Link href="./">link (disabled)</Link>
            </Button>
          </div>

          <Stack>
            <Text myHtml="h2">This h2 and the buttons below are in their own nested Stack component.</Text>
            <Button>primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="green">green</Button>
            <Button isDisabled={true}>primary (disabled)</Button>
            <Button asChild>
              <Link href="./">link</Link>
            </Button>
            <Button asChild isDisabled={true}>
              <Link href="./">link (disabled)</Link>
            </Button>
          </Stack>

          <div>
            <Text>Text: Basic tag. No props.</Text>
            <Text myHtml="h1">Text: myHtml=h1</Text>
            <Text myHtml="div" myStyle="h2">
              Text: myHtml=div; myStyle=h2
            </Text>
            <Text myHtml="h1" myStyle="h3">
              Text: myHtml=h1; myStyle=h3
            </Text>
            <Text myHtml="h3">Text: myHtml=h3</Text>
            <Text>
              Random: Use text-wrap: balance; on headings and subheadings. And use text-wrap: pretty; on paragraphs of
              text to get rid of orphans on the last line. Do you agree?{" "}
            </Text>
          </div>
        </Stack>
      </main>
    </div>
  );
}
