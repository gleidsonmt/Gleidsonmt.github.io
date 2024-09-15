---
## Starting
---

Let's start visualing what we are build.. the most layout panes can fit good here.. we don't need to manage too many children.. and this children is in order to top and down..
only circles needs to above each other.. and the title and legends can be changed in the component.. let's create an interface for further implementations.

---

### The interface

---

```java
public interface SuspenseLoader {

    StringProperty titleProperty();

    StringProperty legendProperty();

    void setTitle(String _title);

    void setLegend(String _legend);
}
```

---

### The Structure

Only if you need to use a label as a legend will need this.. if you don't need a legend.. start with a stackpane as root..
now you can see things as tree

---

```
+ VBox              //
  |-- StackPane    // Circle Container
    |-- Label     // Title
    |-- Circle   // Foreground Circle
    |-- Circle  // Track Circle
  |-- Label    // Root

```

### The Model

## ![alt text](/assets/img/model.png)

There's two section.. the container circle section and the legend section
as long you know there's a layout that lays out its children in a single vertical column (VBox). So let's begin with it.

```java
public class SuspenseCircle extends VBox {
    ...
}
```

Now it's a javafx node.. and a layout pane. We can pass to a scene to create a stage, or
to another layout pane to create layout.. now you need to expose our properties to change.
First create the components that will change.. and the constructors.

```java
public class SuspenseCircle extends VBox {

    private final Label title;
    private final Label legend;

    public SuspenseCircle() {
        this("Loading...", "Loading tasks...");
    }

    public SuspenseCircle(String _title, String _legend) {
        title = new Label(_title);
        legend = new Label(_legend);
        ...
    }
}
```

Exposing my properties..

```java

public class SuspenseCircle extends VBox implements SuspenseLoader {
    ....

    @Override
    public StringProperty titleProperty() {
        return title.textProperty();
    }

    @Override
    public StringProperty legendProperty() {
        return legend.textProperty();
    }

    @Override
    public void setTitle(String _title) {
        title.setText(_title);
    }

    @Override
    public void setLegend(String _legend) {
        legend.setText(_legend);
    }
}
```

Well it's been well node content until now.. let's create the real layout

```java
...
public SuspenseCircle(String _title, String _legend) {
    ...
    // setting a margin between sections
    this.setSpacing(10);
    this.setAlignment(Pos.CENTER);
    // Setting the children
    this.getChildren().setAll(createCircleContainer(), legend);
}

...
private StackPane createCircleContainer() {
    StackPane circleContainer = new StackPane();
    return circleContainer;
}
```

Let's make our main class

```java
public class App extends Application {
    @Override
    public void start(Stage stage) {

        SuspenseCircle suspenseCircle = new SuspenseCircle();
        stage.setTitle("Suspense Circle!");
        stage.setScene(new Scene(suspenseCircle, 800, 600));
        stage.show();

    }

    public static void main(String[] args) {
        launch();
    }
}
```

At this point you will only see a label.. that's the legend.. no problem.. the first section don't have any child yet.. let's put it

```java
private StackPane createCircleContainer() {
    StackPane circleContainer = new StackPane();

    Circle foreground = new Circle();
    foreground.setStrokeWidth(4);
    foreground.setRadius(120); // size in radius
    foreground.setFill(Color.TRANSPARENT); // color
    foreground.setStroke(Color.GRAY); // stroke color

    Circle trackCircle = new Circle();
    trackCircle.setStrokeWidth(4);
    trackCircle.setRadius(120);
    trackCircle.setFill(Color.TRANSPARENT);
    trackCircle.setStroke(Color.BLUE);

//        trackCircle.setStrokeDashOffset(540);
    // this transform the circle.. as long strke dash array create segments in stroke
    // will put a bigger dash array and create a bigger offset in that way
    // circle can be clipped.. it almos 1/4 of the original size
    trackCircle.setStyle("-fx-stroke-dash-array : 600; -fx-stroke-dash-offset: 600;");

    circleContainer.getChildren().setAll(foreground, trackCircle, title);

    return circleContainer;
}
```

```java
private StackPane createCircleContainer() {
    ...
    rotate(trackCircle, 360, 5); // node | angle | duration in seconds
    ...
}

private void rotate(Circle circle, int angle, int duration) {
    RotateTransition transition = new RotateTransition(Duration.seconds(duration), circle);

    transition.setByAngle(angle); // start angle
    transition.setInterpolator(Interpolator.LINEAR);
    transition.setCycleCount(Timeline.INDEFINITE); /// infinite roatation
    transition.play();

}
```

Let's put some id and classes so tha can be styled in css.

```java
public SuspenseCircle(String _title, String _legend) {
    ...
    title.getStyleClass().add("title");
    legend.getStyleClass().add("legend");
    ...
    this.getStyleClass().add("suspense-circle");
    // setting a margin between sections
}

private StackPane createCircleContainer() {
    circleContainer.getStyleClass().add("container-circle");
    ...
    Circle foreground = new Circle();
    foreground.getStyleClass().add("foreground-circle");

    Circle trackCircle = new Circle();
    trackCircle.getStyleClass().add("track-circle");
    ...

    return circleContainer;
}
```

At this point, we finished the first of three loaders.. the circle loader.
Let's add some css..

```css
.suspense-circle > .container-circle > .track-circle {
  -fx-stroke: #3592c4;
}

.suspense-circle > .container-circle > .foreground-circle {
  -fx-stroke: rgba(0, 0, 0, 0.2);
}

.suspense-circle > .container-circle > .title {
  -fx-font-size: 20pt;
}

.suspense-circle > .legend {
  -fx-font-size: 14pt;
}
```
