using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.AspNetCore.Components.WebAssembly.Http;
using Microsoft.JSInterop;
using CMartCV_Shell;
using CMartCV_Shell.Shared;

namespace CMartCV_Shell.Shared
{
    public partial class NavMenu
    {
        private bool collapseNavMenu = true;
        private string? NavBarCssClass => collapseNavMenu ? null : "show";
        private string? NavButtonCssClass => collapseNavMenu ? "collapsed" : null;

        private void ToggleNavMenu()
        {
            collapseNavMenu = !collapseNavMenu;
        }
    }
}