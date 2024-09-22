## Starting

Let's start visualizing what we are building.. most layout panes can fit well here.. we don't need to manage too many children.. and the items are top and down. Only circles need to be above each other.. and the title and legends can be changed in the component.. let's create an interface for further implementations.

### The interface

```java
public interface SuspenseLoader {

    StringProperty titleProperty();   // bind this value.. with the tasks.. or services..

    StringProperty legendProperty();  // bind this value.. with the tasks.. or services..

    void setTitle(String _title);

    void setLegend(String _legend);
}
```

---

### The Structure

Only if you need to use a label as a legend will you need this.. if you don't need a legend.. start with a stack pane as root.. now you can see things as a tree

---

```
+ VBox              //
  |-- StackPane    // Circle Container
    |-- Label     // Title
    |-- Circle   // Foreground Circle
    |-- Circle  // Track Circle
  |-- Label    // Root

```

There are basic two sections.. the container circle section and the legend section.. if you noticed is the same structure in the three loaders.. well.. they're called circle loaders on purpose.. to do this let's create a boilerplate an abstract class.. and as long you know there's a layout that lays out its children in a single vertical column (VBox). So let's begin with it.

```java
public abstract class CircleLoader extends VBox { // The boilerplate and the node as CircleLoader class
    ...
}
```

Now it's a Javafx node.. and a layout pane. We can pass to a scene to create a stage, or
to another layout pane to create a layout.. now you need to expose our properties to change.
First, create the components that will change.. and the constructors.

```java
public abstract class CircleLoader extends VBox {

    protected final Label title;
    protected final Label legend;

    public CircleLoader() {
        this("Loading...", "Loading tasks...");
    }

    public CircleLoader(String _title, String _legend) {
        title = new Label(_title);
        legend = new Label(_legend);

        title.getStyleClass().add("title");
        legend.getStyleClass().add("legend");
        ...
    }
}
```

Exposing the properties..

```java

public abstract class CircleLoader extends VBox implements SuspenseLoader {
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
public CircleLoader(String _title, String _legend) {
    ...
    // setting a margin between sections
    this.setSpacing(10);
    this.setAlignment(Pos.CENTER);
    this.getStyleClass().add(0, "circle-loader");
    // Setting the children
    StackPane circleContainer = createCircleContainer();
    circleContainer.getStyleClass().add("container-circle");
    circleContainer.getChildren().add(title);
}

public abstract StackPane createCircleContainer(); // this method will called by his concret class
...
```

Now the animation.. all circles will have infinity animations.. make an default animation

```java
// the circle | the starting angle | the duration in seconds
protected void rotate(Circle circle, int angle, int duration) {
    RotateTransition transition = new RotateTransition(Duration.seconds(duration), circle);

    transition.setByAngle(angle); // start angle
    transition.setInterpolator(Interpolator.LINEAR);// trye to create an easy out.. or a tangent effect
    transition.setCycleCount(Timeline.INDEFINITE); /// infinite roatation
    transition.play();

}
```

Now the base class ist created, now to extend and create the first circle loader

```java
public class SuspenseCircle extends CircleLoader implements SuspenseLoader {

    public SuspenseCircle() {
        super();
        this.getStyleClass().add("suspense-circle");
    }

    public SuspenseCircle(String _title, String _legend) {
        super(_title, _legend);
        this.getStyleClass().add("suspense-circle");
    }

    @Override
    protected StackPane createCircleContainer() {
        StackPane circleContainer = new StackPane();
        ...
        return circleContainer;
    }
```

Let's make our circles

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

    // trackCircle.setStrokeDashOffset(540);
    // this transform the circle.. as long strke dash array create segments in stroke
    // will put a bigger dash array and create a bigger offset in that way
    // circle can be clipped.. it almos 1/4 of the original size
    trackCircle.setStyle("-fx-stroke-dash-array : 600; -fx-stroke-dash-offset: 600;");

    circleContainer.getChildren().setAll(foreground, trackCircle);

    return circleContainer;
}
```

---

At this point, we finished the first of three loaders.. the suspense loader.
Let's add some css..

```css
.root {
  -fx-background-color: white;
}

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

Making the stage

```java
public class App extends Application {
    @Override
    public void start(Stage stage) {

        SuspenseCircle suspenseCircle = new SuspenseCircle();
        stage.setTitle("Suspense Circle!");
        stage.setScene(new Scene(suspenseCircle, 800, 600));
        stage.getScene().getStylesheets().add(getClass().getResource("style.css").toExternalForm());
        stage.show();

    }

    public static void main(String[] args) {
        launch();
    }
}
```

---

### The Result

![alt text](src/assets/img/gif_circle.gif)

### Finished, but how about the tech and 3D?

Let's begin with this.. first create another class called TechCircle.. its almost identical.

```java
public class TechCircle extends CircleLoader implements SuspenseLoader {

    public TechCircle() {
        super();
        this.getStyleClass().add("tech-circle");
    }

    public TechCircle(String _title, String _legend) {
        super(_title, _legend);
        this.getStyleClass().add("tech-circle");
    }

    @Override
    protected StackPane createCircleContainer() {
        StackPane circleContainer = new StackPane();
        ....
        return circleContainer;
    }
}
```

The same strategy..

```java
    @Override
    protected StackPane createCircleContainer() {
        StackPane circleContainer = new StackPane();
        ObservableList<Circle> circles = FXCollections.observableArrayList();

        for (int i = 0; i < 3; i++) {
            Circle circle = new Circle();
            circle.getStyleClass().add("track-circle");
            circle.setStrokeWidth(4);
            circle.setFill(Color.TRANSPARENT);
            circles.add(circle);
        }

        // updating the radius
        circles.get(0).setRadius(120);
        circles.get(1).setRadius(105);
        circles.get(2).setRadius(85);

        // start with diferent angles per circle and speed
        rotate(circles.get(0), 180, 18);
        rotate(circles.get(1), 360, 10);
        rotate(circles.get(2), 60, 22);

        circles.get(0).setStyle("-fx-stroke-dash-offset : 5; -fx-stroke-dash-array : 200;");
        circles.get(1).setStyle("-fx-stroke-dash-array : 150;");
        circles.get(2).setStyle("-fx-stroke-dash-array : 20;");

        circleContainer.getChildren().setAll(circles);
        return circleContainer;
    }
```

Now the same pattern to build 3D circle

```java
public class Suspense3DCircle extends CircleLoader implements SuspenseLoader {
        public Suspense3DCircle() {
        super();
        this.getStyleClass().set(0, "DCircle");
    }

    public Suspense3DCircle(String _title, String _legend) {
        super(_title, _legend);
        this.getStyleClass().set(0, "DCircle");
    }

      @Override
    protected StackPane createCircleContainer() {
        StackPane circleContainer = new StackPane();
        ....
        return circleContainer;
    }
}
```

Now create a method that's only for 3D circle.. if notice this methods has Point3D as a parameter.. thats indicates a rotation with Z axis

```java
public class Suspense3DCircle extends CircleLoader implements SuspenseLoader {
    ...

    private void rotate(Circle circle, int angle, Point3D point) {
        RotateTransition rotate = new RotateTransition(Duration.seconds(5), circle);

        rotate.setAxis(point);
        rotate.setAutoReverse(true);

        rotate.setByAngle(angle);
        rotate.setInterpolator(Interpolator.LINEAR);
        rotate.setCycleCount(Timeline.INDEFINITE);
        rotate.play();

    }
}
```

Overriding the creator circle method

```java
    @Override
    protected StackPane createCircleContainer() {
        StackPane circleContainer = new StackPane();

        ObservableList<Circle> circles = FXCollections.observableArrayList();

        for (int i = 0; i < 4; i++) {
            Circle circle = new Circle();
            circle.getStyleClass().add("track-circle");
            circle.setStyle(" -fx-stroke-dash-array : 10;");
            circle.setStrokeWidth(2);
            circle.setRadius(120);
            circle.setFill(Color.TRANSPARENT);
            circles.add(circle);
        }

        rotate(circles.get(0), 360,  new Point3D(100, 0, 0));
        rotate(circles.get(1), 180, new Point3D(100,100,0));
        rotate(circles.get(2), 270, new Point3D(100,50,0));
        rotate(circles.get(3), 90, new Point3D(100,100,0));

        circleContainer.getChildren().setAll(circles);
        return circleContainer;
    }
```

The final css with all circles..

```css
.root {
  -fx-background-color: white;
}

.DCircle > .container-circle > .track-circle,
.tech-circle > .container-circle > .track-circle,
.suspense-circle > .container-circle > .track-circle {
  -fx-stroke: #3592c4;
}

.suspense-circle > .container-circle > .foreground-circle {
  -fx-stroke: rgba(0, 0, 0, 0.2);
}

.tech-circle > .container-circle > .title,
.suspense-circle > .container-circle > .title {
  -fx-font-size: 20pt;
}

.tech-circle > .legend,
.suspense-circle > .legend {
  -fx-font-size: 14pt;
}
```

Now I'll change the app class for show the three circles in the same stage...

```java
public class App extends Application {
    @Override
    public void start(Stage stage)  {

        FlowPane root = new FlowPane();
        root.setHgap(20);
        root.setAlignment(Pos.CENTER);

        SuspenseCircle suspenseCircle = new SuspenseCircle();
        TechCircle techCircle = new TechCircle();
        Suspense3DCircle suspense3DCircle = new Suspense3DCircle();

        root.getChildren().addAll(suspenseCircle, techCircle, suspense3DCircle);

        stage.setTitle("The Circles!");
        stage.setScene(new Scene(root, 800, 600));
        stage.getScene().getStylesheets().add(getClass().getResource("style.css").toExternalForm());

        stage.show();

    }

    public static void main(String[] args) {
        launch();
    }
}
```

![alt text](src/assets/img/final_circles.gif)

If you need more.. here is a few example of using tasks

### Using tasks

```java
        ...
        Task task = new Task() {
            @Override
            protected Object call() throws Exception {
                Thread.sleep(2000);
                updateTitle("Initializing...");
                updateMessage(("Welcome!"));

                return null;
            }
        };
        Thread thread = new Thread(task);
        thread.start();
        suspenseCircle.titleProperty().bind(task.titleProperty());
        suspenseCircle.legendProperty().bind(task.messageProperty());
```

That's all folks..
You can see a gist by clicking on the button below.
