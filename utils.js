//TODO: Implement utils

JSON.parse("1")       //= int 1 
JSON.parse("1.1")     //= double 1.1
JSON.parse("'a'")     //= string "a"
JSON.parse("{a:1}")   //= new Dictionary<string, object> { {"a", 1 } }
JSON.parse("[{a:1}]") //= new List<object> { new Dictionary<string, object> { { "a", 1 } } }

public class CustomMethods : ScriptMethods
{
    public string reverse(string text) => new string(text.Reverse().ToArray());
}

var scope = JS.CreateScope(
         args: new Dictionary<string, object> { { "arg", "value"} }, 
    functions: new CustomMethods());

JS.eval("arg", scope)                                        //= "value"
JS.eval("reverse(arg)", scope)                               //= "eulav"
JS.eval("3.itemsOf(arg.reverse().padRight(8, '_'))", scope) //= ["eulav___", "eulav___", "eulav___"]

//= { a: ["eulav___", "eulav___", "eulav___"] }
JS.eval("{a: 3.itemsOf(arg.reverse().padRight(8, '_')) }", scope)

var scope = context.CreateScope(new Dictionary<string, object> {
    ["target"] = person
});
var result = (ReadOnlyMemory<byte>)JS.eval("serialize(target)", scope);
