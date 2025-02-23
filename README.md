# React Router Dom v6 Programmatic Navigation Bug

This repository demonstrates a subtle bug in React Router Dom v6 related to programmatic navigation using the `useNavigate` hook.  The initial navigation works correctly, but subsequent attempts fail silently.  There are no errors logged to the console.

## Bug Description

The issue occurs when using `useNavigate` to navigate between routes.  The first navigation works as expected, but any further navigation attempts using `useNavigate` do not trigger a route change.  The URL does not update, and the component does not rerender.

## Solution

The solution involves ensuring that the component using `useNavigate` is properly re-rendered after each navigation. This can often be achieved by using a state variable that changes after each successful navigation.