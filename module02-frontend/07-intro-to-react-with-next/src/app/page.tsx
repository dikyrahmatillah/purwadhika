import Content from "@/components/content";
import Header from "@/components/header";

export default function Home() {
  const userName = "Mary";
  const userAge = 21;
  return (
    <>
      <Header userName={userName} userAge={userAge} />
      <Content userName={userName} userAge={userAge} />
    </>
  );
}

// NOTES
// How to create component
// 1. create a funciton
// 2. function name should be PascalCase
// 3. The functions should return an html tag
// 4. export default the function

// slot expressions {} in html
// (() => "hehe")();

// EXPRESSIONS vs STATEMENT
// 1. Expression -> A value
// variable name
// true ? "benar" : "salah"

// 2. Statement -> An action
// function deinition
// class definition
