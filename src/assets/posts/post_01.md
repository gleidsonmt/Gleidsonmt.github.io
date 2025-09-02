## 📑 Starting

Hello you, well let's think about toggle buttons, they are buttons that represents selection, normally you see this in forms to select preferences or swithing among the options.

See this simple example.

<!-- ![Default Toggle](/public/assets/img/default_toggle.png) -->

### The Result

Lets make our boierplate.
First I assume you can create a javafx project with any ide an run.
And you have the main class extending App class

```java
package io.github.gleidsonmt.examples;

import javafx.application.Application;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

import java.io.IOException;

public class App extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        StackPane root = new StackPane();
        Scene scene = new Scene(root, 800, 600);
        stage.setTitle("Hello!");
        root.getChildren().add(createControl());
        scene.getStylesheets().add(getClass().getResource("main.css").toExternalForm());
        stage.setScene(scene);
        stage.show();
    }

    private Pane createControl() {
        HBox content = new HBox();
        return content;
    }
}

```

Let's focus on two things, a method that create our control and the css file and.  
First createControl() method create a Pane that will the layout root of the control.

```java
  ...
  content.setAlignment(Pos.CENTER);
  ToggleButton left = new ToggleButton("ON");
  left.getStyleClass().add("toggle-left");

  ToggleButton right = new ToggleButton("OFF");
  right.getStyleClass().add("toggle-right");
  content.getChildren().addAll(left, right);
```

Let's switch to master css
This is what my mind bring to code.

```css
.toggle-button {
  -fx-background-color: #0085ff;
  -fx-border-color: transparent;
  -fx-text-fill: white;
  -fx-border-width: 2px;
  -fx-background-insets: 0px;
  -fx-background-radius: 0px;
  -fx-border-radius: 0px;
  -fx-pref-height: 40px;
  -fx-border-color: #0085ff;
}

.toggle-button:selected {
  -fx-background-color: transparent;
  -fx-text-fill: #0085ff;
}

.toggle-right {
  -fx-border-radius: 0px 100px 100px 0px;
  -fx-background-radius: 0px 100px 100px 0px;
}

.toggle-left {
  -fx-border-radius: 100px 0px 0px 100px;
  -fx-background-radius: 100px 0px 0px 100px;
}
```

But the buttons are action wrong, the two get selected at the same time.
Fix, create a group.

```java
  ...
  ToggleGroup group = new ToggleGroup();
  group.getToggles().addAll(right, left);
```

In the final it's all about creating a cool layout.
You can change graphic, style of the nodes to create a most intereactive control.
