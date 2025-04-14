import Image from "next/image";
import styles from "./page.module.css";
import Stack from "./components/stack/stack";
import Button from "./components/button/button";
import Link from "next/link";
import Text from "./components/text/text";
import Example from "./components/example/example";
import Alink from "./components/alink/alink";
import Button2 from "./components/button2/button2";
import Button3 from "./components/button3/button3";
import Reftest from "./components/reftest/reftest";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Example />
        <div>
          <Example className="cla" />
        </div>
        <div>
          <Example className="unm" />
        </div>

        <Stack gap="m">
          <div>
            <Alink href="https://www.google.com">alink</Alink>
            <Alink href="https://www.bing.com" target="_blank" variant="primary">
              alink
            </Alink>
            <Alink href="https://www.apple.com" aria-roledescription="this is a test" variant="secondary">
              alink
            </Alink>
            <Alink href="https://www.youtube.com" variant="green">
              alink
            </Alink>
            <Alink href="https://www.cnet.com" variant="primary" isDisabled={true}>
              alink
            </Alink>
            <p>
              this is <Alink>alink</Alink> in a paragraph
            </p>
            <hr />
            <Button2 variant="primary">button2</Button2>
            <Button2 variant="secondary">button2</Button2>
            <Button2 variant="primary" isDisabled={true} disabled>
              button2
            </Button2>
            <hr />
            <Button3>button3</Button3>
            <Button3 variant="secondary">button3</Button3>
            <Button3 variant="secondary" disabled>
              button3 (disabled)
            </Button3>
            <Button3 asChild>
              <a href="http://www.yahoo.com">button3 link</a>
            </Button3>
            <Button3 variant="secondary" asChild>
              <a href="http://www.brave.com">button3 link</a>
            </Button3>
            <Button3 asChild disabled>
              <a href="http://www.firefox.com">button3 link (disabled)</a>
            </Button3>
            <Button3 isLoading={true}>button3</Button3>

            <Reftest></Reftest>
          </div>
        </Stack>

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
