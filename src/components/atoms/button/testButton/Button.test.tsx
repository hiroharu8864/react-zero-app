import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

/**
 * StorybookのStoryをインポートした後、
 * composeStoriesを利用してテストで利用できる
 * コンポーネントへ変換する。
 */

const { Default, Outlined } = composeStories(stories);

/**
 * テストケース Default
 */
test("render button with default args", () => {
  render(<Default>Button</Default>);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});

/**
 * テストケース Outlined
 */
test("render button with outlined args", () => {
  render(<Outlined>Button</Outlined>);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});
